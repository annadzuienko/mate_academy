// task https://github.com/kl2karpenko/MateAcademy/blob/master/27_lesson.md

$(function () {
	let $container = $('.conteiner');
  	let $allLi = $('.list-group-item');
  	let $list = $('.list-group');
  	let $addButton = $('.btn');
  	let $inputFN = $('#first-name');
  	let $inputLN = $('#last-name');
  	let $remowe = $('.badge');

  	$container.click(function( event ) {
 		event.preventDefault();
  	});

	
  	$addButton.on('click', function (event) {
    	$list.append( $( `<li class="list-group-item d-flex justify-content-between align-items-center">${$inputFN.val()} ${$inputLN.val()}<button type="button" class="badge show hide badge-primary badge-pill">Remove</button></li>` ) );
  		$inputFN.val('');
  		$inputLN.val('');
	});

	$list.on('click', '.badge', function(event) {
		$(this).closest('li').remove();
	});
  
// $(this).data('page', 5) - добавляем дата-атрибут, в скобках (название, значение)
// <li datа-page = 5> - дата-атрибутов нужны для js, как 

  	
  	$list.on('mouseenter','.list-group-item', function (event) {
    	$( this ).find('.show').show();
    	$( this ).find('.hide').show();
	}).on('mouseleave','.list-group-item',  function(){
    	$( this ).find('.hide').hide('blind', function(){
        	$('.show').hide();
    	});
	});



  	/*$addButton.on('click', function () {
  		let text = $(this).text();
  		$allLi.val(text);
  	});*/


});  

