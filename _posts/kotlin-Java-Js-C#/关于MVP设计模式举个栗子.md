> MVP 全称：Model-View-Presenter ；
MVP 是从经典的模式MVC演变而来，它们的基本思想有相通的地方：Controller/Presenter负责逻辑的处理，
Model提供数据，
View负责显示。


----------


#### 1.Model（数据层）:
- 1.Base:定义一些基础的公用的函数
```
public interface IModel {
    void setID(intid);
    void setName(Stringname);
    void setPassword(Stringpasswords);
    User Beanload(intid);
}
```
- 2.实现类：具体编写需要登录需要用的方法
```java
	public class LoginModelimplementsIModel{
		...
		void 数据请求等操作...
		...
	}
```
#### 2.Presenter（逻辑层）:
- 1.基础方法
```
	public class BasePresenter {}
```
- 2.Base:接口
```
	public interface IBaseView {}
```
- 3.LoginPresenter:连接上面两个东西
```
	public class LoginPresenter extendsBasePresenter{
		private finalIBaseView mLoginView;//逻辑
		private LoginModel mLoginModel;//数据
		publicLoginPresenter(Context context,IBaseView view) {
		super((IBaseView) context);
		mLoginView= view;//业务逻辑纽带
		mLoginModel = new LoginModel(new ILogicImpl());
	}
```

#### 3.View(视图层):
```
publicclassLoginActivityextendsBaseActivityimplementsIBaseView {
	LoginPresenter p;
		initView(){
			p = new LoginPresenter(this,this);
		}
	}
```
