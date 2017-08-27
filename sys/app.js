$(document).ready(function(){
	

		const page = {
			home: 	 'home.html',
			profile: 'profile.html',
			about: 	 'about.html',
			contact: 'contact.html',
			galery:  'galery.html'
		};
		var component = {
			loading: '<center><div class="preloader-wrapper active"><div class="spinner-layer spinner-red-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div> </div><div class="circle-clipper right"> <div class="circle"></div> </div> </div> </div></center>',
			head: 	 'head.html',
			footer:  'footer.html'
		};
		function loadFooter()
		{
			_loadDoc("./component/"+component.footer,function(r){
				   if (r != false)
				   {
				   	    _printTo("template_footer",r);
				   }
			});
		}
		function loadHeader()
		{
		    _loadDoc("./component/"+component.head,function(r){
					if (r != false)
					{	
						_printTo("template_head",r);
					}
					
			});
		}

		function loadPage(type)
		{
				let u;
				let name;
				switch (type) 
				{
					 case 'H':
				        u  = page.home ;
				         name = 'Home';
			        	break;
			        case 'P':
				        u  = page.profile;
				        name = 'Profile';
				        break;
				     case 'A':
				        u  = page.about ;
				         name = 'About';
				        break;
				     case 'C':
				        u  = page.contact ;
				         name = 'Contact';
				        break;
				     case 'G':
				         u  = page.galery ;
				         name = 'Galery';
				        break;
				    
	        	 }
				if (u)
				{
				   _printTo("template_body",component.loading);
				 
				   _loadDoc("./page/"+u,function(r){
					   	_printTo("template_body","");
						if (r != false)
						{
							_printTo("template_body",r);
							_printTo("title_name",name);
							_setTitle(name + " | EXAMPLE SPA | GARUDA JAVASCRIPT");
						}
						
					});
				}
				else
				{
					_refresh(_myUrl());
				}
		}


		function showToast()
		{
			var $toast = $('<span>Clone / Download </span></br>').add($('<a target="_blank" href="https://github.com/lamhotsimamora/Example-Single-Page-Application-Garuda-Query-Javascript">&nbsp Go</a>'));
			Materialize.toast($toast, 10000);
		}

		
		loadHeader();
		
		loadFooter();

		loadPage("H");

		setTimeout(function(){
			
			_onClick("btn_profile",function(){
				loadPage("P");
			});
			_onClick("btn_about",function(){
				loadPage("A");
			});
			_onClick("btn_contact",function(){
				loadPage("C");
			});
			_onClick("btn_next",function(){
				loadPage("P");
			});
			_onClick("btn_galery",function(){
				loadPage("G");
			});
			_onClick("btn_home",function(){
				loadPage("H");
			});
			_onClick("btn_profile_",function(){
				loadPage("P");
			});
			_onClick("btn_about_",function(){
				loadPage("A");
			});
			_onClick("btn_contact_",function(){
				loadPage("C");
			});
		
			_onClick("btn_galery_",function(){
				loadPage("G");
			});
			_onClick("btn_home_",function(){
				loadPage("H");
			});


			_focus("search");
	
			_onKeyUpToText("search","txt_search");


			_onKeyPress("search",function(v){
				   	var value = _getValById("search");
				    
					if (value.toLowerCase() ==='profile')
					{
						loadPage("P");
					}
					else if (value.toLowerCase() ==='contact')
					{
						loadPage("C");
					}
					else if (value.toLowerCase() ==='galery')
					{
						loadPage("G");
					}
					else if (value.toLowerCase() ==='about')
					{
						loadPage("A");
					}
			
			});
		},200);
		
		
		showToast();

		_keyCustom(function(){
			showToast();
		},_keyCode.space);
		
		_keyCustom(function(){
			loadPage("C");
		},_keyCode.insert);

		_keyCustom(function(){
			loadPage("H");
		},_keyCode.home);

		$(".button-collapse").sideNav();	
});
