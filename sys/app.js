$(document).ready(function(){
	
		var render_body		=	null;
		var render_footer	=	null;

        const page = {
        	home: 	 'home.html',
        	profile: 'profile.html',
        	about: 	 'about.html',
        	contact: 'contact.html',
        	galery:  'galery.html'
        };
		var component = {
			loading: '<center><div class="preloader-wrapper active"><div class="spinner-layer spinner-red-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div> </div><div class="circle-clipper right"> <div class="circle"></div> </div> </div> </div></center>',
			head:'head.html',
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

		function loadPage(type,element)
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
				 
				   _loadDoc("./component/"+u,function(r){
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
			var $toast = $('<span>Clone / Download </span></br>').add($(' <a target="_blank" href="https://github.com/lamhotsimamora/Example-Single-Page-Application-Garuda-Query-Javascript">&nbsp Go</a>'));
			Materialize.toast($toast, 10000);
		}

		
		loadHeader();
		loadPage("H","template_body");
		loadFooter();

		setTimeout(function(){
			
			
			_onClick("btn_profile",function(){
				loadPage("P","template_body");
			});
			_onClick("btn_about",function(){
				loadPage("A","template_body");
			});
			_onClick("btn_contact",function(){
				loadPage("C","template_body");
			});
			_onClick("btn_next",function(){
				loadPage("P","template_body");
			});
			_onClick("btn_galery",function(){
				loadPage("G","template_body");
			});
			_onClick("btn_home",function(){
				loadPage("H","template_body");
			});
			_onClick("btn_profile_",function(){
				loadPage("P","template_body");
			});
			_onClick("btn_about_",function(){
				loadPage("A","template_body");
			});
			_onClick("btn_contact_",function(){
				loadPage("C","template_body");
			});
		
			_onClick("btn_galery_",function(){
				loadPage("G","template_body");
			});
			_onClick("btn_home_",function(){
				loadPage("H","template_body");
			});


			_focus("search");
	
			_onKeyUpToText("search","txt_search");


			_onKeyPress("search",function(v){
				   	var value = _getValById("search");
				    
					if (value.toLowerCase() ==='profile')
					{
						loadPage("P","template_body");
					}
					else if (value.toLowerCase() ==='contact')
					{
						loadPage("C","template_body");
					}
					else if (value.toLowerCase() ==='galery')
					{
						loadPage("G","template_body");
					}
					else if (value.toLowerCase() ==='about')
					{
						loadPage("A","template_body");
					}
			
			});
		},200);
		
		
		showToast();
		_keyCustom(function(){
			showToast();
		},_keyCode.space);
		_keyCustom(function(){
			loadPage("C","template_body");
		},_keyCode.insert);

		_keyCustom(function(){
			loadPage("H","template_body");
		},_keyCode.home);


		$(".button-collapse").sideNav();	
		

});
