window.onload = main;

function getRgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

function main() {
    //drop
    const dropList = [];
    const gravity = 0.5;
    //
    const linelist = [];
    const canvasEl = document.getElementById('rains');
    const ctx = canvasEl.getContext('2d');
    const mousePos = [0, 0];
    // var backgroundColor = '../main/img/bg_zero.jpg';
    // const backgroundColor = '#000';
    const backgroundColor = 'rgba(0,0,0,0.53)';
    canvasEl.width = canvasEl.clientWidth;
    canvasEl.height = canvasEl.clientHeight;
    let speedx = 0;
    let maxspeedx = 0;
    window.onresize = function () {
        canvasEl.width = canvasEl.clientWidth;
        canvasEl.height = canvasEl.clientHeight;
    };
    window.onmousemove = function (e) {
        mousePos[0] = e.clientX;
        mousePos[1] = e.clientY;
        maxspeedx = (e.clientX - canvasEl.clientWidth / 2) / (canvasEl.clientWidth / 2);
    };

    // window.onmousedown=function(e)
    function createLine(e) {
        const temp = 0.25 * (50 + Math.random() * 100);
        const myline = {
            speed: 5.5 * (Math.random() * 6 + 3),
            die: false,
            posx: e,
            posy: -200,
            h: temp,
            color: getRgb(Math.floor(temp * 255 / 75), Math.floor(temp * 255 / 75), Math.floor(temp * 255 / 75))
        };
        linelist.push(myline);
    }

    window.requestAnimationFrame(update);

    function createDrop(x, y) {
        return {
            die: false,
            posx: x,
            posy: y,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * (-6) - 3,
            radius: Math.random() * 1.5 + 1
        };
    }

    function madedrops(x, y) {
        const maxi = Math.floor(Math.random() * 5 + 5);
        for (let i = 0; i < maxi; i++) {
            dropList.push(createDrop(x, y));
        }
    }

    function update() {
        if (dropList.length > 0) {
            dropList.forEach(function (e) {
                e.vx = e.vx + (speedx) / 2;
                e.posx = e.posx + e.vx;
                e.vy = e.vy + gravity;
                e.posy = e.posy + e.vy;
                if (e.posy > canvasEl.clientHeight) {
                    e.die = true;
                }
            });
        }
        for (let i = dropList.length - 1; i >= 0; i--) {
            //delite die
            if (dropList[i].die) {
                dropList.splice(i, 1);
            }
        }

        speedx = speedx + (maxspeedx - speedx) / 50;

        if (Math.random() > 0) {
            createLine(Math.random() * 2 * canvasEl.width - (0.5 * canvasEl.width));
            createLine(Math.random() * 2 * canvasEl.width - (0.5 * canvasEl.width));
            createLine(Math.random() * 2 * canvasEl.width - (0.5 * canvasEl.width));
        }
        const mydeadline = canvasEl.clientHeight - Math.random() * canvasEl.clientHeight / 5;
        linelist.forEach(function (e) {
            const dis = Math.sqrt(((e.posx + speedx * e.h) - mousePos[0]) * ((e.posx + speedx * e.h) - mousePos[0]) + (e.posy + e.h - mousePos[1]) * (e.posy + e.h - mousePos[1]));
            if (dis < 35) {
                madedrops(e.posx + speedx * e.h, e.posy + e.h);
                e.die = true;
            }

            if ((e.posy + e.h) > mydeadline) {
                if (Math.random() > 0.85) {
                    madedrops(e.posx + speedx * e.h, e.posy + e.h);
                    e.die = true;
                }
            }
            if (e.posy >= canvasEl.clientHeight) {
                e.die = true;
            } else {
                e.posy = e.posy + e.speed;
                e.posx = e.posx + (e.speed * speedx);
            }
        });
        for (let i = linelist.length - 1; i >= 0; i--) {
            if (linelist[i].die) {
                linelist.splice(i, 1);
            }
        }
        render();
        window.requestAnimationFrame(update);
    }

    function render() {
        // ctx.backgroundImage = backgroundColor;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

        linelist.forEach(
            function (line) {

                ctx.strokeStyle = line.color;
                ctx.lineWidth = 4.5;
                ctx.beginPath();
                ctx.moveTo(line.posx, line.posy);
                ctx.lineTo(line.posx + speedx * line.h, line.posy + line.h);
                ctx.stroke();
            });
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#fff";
        dropList.forEach(function (e) {
            ctx.beginPath();
            ctx.arc(e.posx, e.posy, e.radius, Math.random() * Math.PI * 2, Math.PI);
            ctx.stroke();
        });
    }


}


