import{c as t,f as c,i as f}from"./chunk-THKE7DQS.js";var a=c(f(),1);var n=class n extends a.PrefixedContext{constructor(d){if(super(d),!n.init){n.init=!0;var e=a.StringEditor,o=a.PasswordEditor;(0,a.initFormType)(n,["Username",e,"Password",o])}}};t(n,"LoginForm"),n.formKey="Membership.Login";var x=n;var i=c(f(),1);var m=class m extends i.PrefixedContext{constructor(d){if(super(d),!m.init){m.init=!0;var e=i.StringEditor,o=i.EmailAddressEditor,l=i.PasswordEditor;(0,i.initFormType)(m,["DisplayName",e,"Email",o,"ConfirmEmail",o,"Password",l,"ConfirmPassword",l])}}};t(m,"SignUpForm"),m.formKey="Membership.SignUp";var E=m;var y=c(f(),1);var u=class u extends y.ColumnsBase{};t(u,"MyProfileColumns"),u.columnsKey="Membership.MyProfile",u.Fields=(0,y.fieldsProxy)();var R=u;var s=c(f(),1);var p=class p extends s.PrefixedContext{constructor(d){if(super(d),!p.init){p.init=!0;var e=s.StringEditor,o=s.EmailAddressEditor,l=s.ImageUploadEditor;(0,s.initFormType)(p,["DisplayName",e,"FormInitials",e,"Email",o,"UserImage",l,"Username",e])}}};t(p,"MyProfileForm"),p.formKey="Membership.MyProfile";var v=p;var g=c(f(),1);var r=class r{};t(r,"MyProfileRow"),r.idProperty="UserId",r.nameProperty="Username",r.localTextPrefix="Membership.MyProfile",r.deletePermission="None",r.insertPermission="None",r.readPermission="*",r.updatePermission="*",r.Fields=(0,g.fieldsProxy)();var P=r;var S=c(f(),1),U;(e=>(e.baseUrl="Membership/MyProfile",e.Methods={Create:"Membership/MyProfile/Create",Update:"Membership/MyProfile/Update",Retrieve:"Membership/MyProfile/Retrieve",List:"Membership/MyProfile/List"},["Create","Update","Retrieve","List"].forEach(o=>{e[o]=function(l,b,M){return(0,S.serviceRequest)(e.baseUrl+"/"+o,l,b,M)}})))(U||(U={}));export{x as a,R as b,v as c,P as d,U as e,E as f};
//# sourceMappingURL=chunk-SFR2XXEK.js.map
