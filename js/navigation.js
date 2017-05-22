var menuBtn=document.getElementById('menuBtn'),
	nav=document.getElementById('secondary'),
	overlay=document.getElementsByClassName('overlay')[0];
	body=document.body;


function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

function navFn(){
	var ml=parseInt(getStyle(nav,'marginLeft'),10)||0;
	if(ml){
		body.style.overflow='hidden';
		nav.style.marginLeft='0';
		overlay.style.display='block';
	} else {
		body.style.overflow='';
		nav.style.marginLeft='-100%';
		overlay.style.display='none';
	}
}

function resizeFn(){
	var width=document.documentElement.clientWidth || document.body.clientWidth,
		ml=parseInt(getStyle(nav,'marginLeft'),10)||0;
	if(width<769){
		if(!ml){
			overlay.style.display='none';
			body.style.overflow='';
			nav.style.marginLeft='-100%';
		}
	} else {
		if(ml){
			overlay.style.display='none';
			nav.style.marginLeft='0';
		}
	}
}

overlay.onclick=navFn;
menuBtn.onclick=navFn;
window.onresize=resizeFn;