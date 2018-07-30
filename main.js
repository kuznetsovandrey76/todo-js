// $(document).ready(function(){

	var storage = [];
	var id = 0;

	$('.task_add2').click(function() { 
		// for(var i = 0; i < 2; i++) { 
		$('.article').append('<div class="one_task"><span class="up">↑</span><span class="down">↓</span><input type="text" placeholder="task:" class="task_name"><input type="text" placeholder="description:"  class="task_description"><input type="text" placeholder="time:"  class="task_time"><span class="delete">delete</span></div>');
		// }
	});
	
		for(var i = 0; i < 1; i++) { 
		// $('.article').append('<div class="one_task"><span class="up">↑</span><span class="down">↓</span><input type="text" placeholder="task:" class="task_name"><input type="text" placeholder="description:"  class="task_description"><input type="text" placeholder="time:"  class="task_time"><span class="delete">delete</span></div>');
	}

	// $(document).on('click touchstart', '.task_time', function(){
	// 	console.log(this.val());
	// }); 



	$('.task_add').click(function() {
		var name = $('.task_nameQ').val();
		var text = $('.task_textQ').val();
		var time = $('.task_timeQ').val();
		var task = [];
		task.push(name, text, time);
		storage.push(task); 
		console.log(storage);
		$('.article').append('<div class="one_task"><span class="up">↑</span><span class="down">↓</span><input type="text" placeholder="task:" class="task_name" value="'+name+'"><input type="text" placeholder="description:"  class="task_description" value="'+text+'"><input type="text" placeholder="time:" class="task_time" value="'+time+'"><span class="delete">delete</span></div>');
		// setTimeout(function(){
		$('.task_nameQ').val('');
		$('.task_textQ').val('');
		$('.task_timeQ').val('');
		// }, 2000);



		// $('.article').append('<div><p>' + id + name + text + time + '<span class="del"> del </span></p></div>');
		// $('.article').append('<div class="one_task"><p><span class="id">'+id+'</span><a class="up" href="#">Вверх</a> <a class="down" href="#">Вниз</a>'+name + ' ' + text + ' ' + time + '<span class="copy">copy</span><span class="edit">edit</span><span class="delete">delete</span></p></div>');

		// id += 1;
	});

    //  $(".up").click(function(){
    //     var pdiv = $(this).parent('div');
    //     pdiv.insertBefore(pdiv.prev());
    //     return false
    // });
    // $(".down").click(function(){
    //     var pdiv = $(this).parent('div');
    //     pdiv.insertAfter(pdiv.next());
    //     return false
    // });



	$(function() {
        $(document).on('click touchstart', '.delete', function(){ 
            console.log(this.parentNode.innerHTML);
            console.log(this);
        });
        $(document).on('click touchstart', '.edit', function(){ 
            console.log(this.parentNode.innerText);
        });

    });

     // $(document).on('click touchstart', '.up', function(){ 
        
		$('.total').append('');
		




	  $('.task_time').keyup(function( event ){ // задаем функцию при отпускании после нажатия любой клавиши клавиатуры на элементе
	    // console.log( event.key ); // выводим код нажатой клавиши
	  });

	  $('.task_time').click(function( event ){ // задаем функцию при отпускании после нажатия любой клавиши клавиатуры на элементе
	    console.log( event ); // выводим код нажатой клавиши
	  });
// });

// var iter = 0
// $(document).on('click', '.one_task', function(e){
    // благодаря "делегированию событий" - событие сработает всегда
        // iter+=1
        // console.log('2: '+iter);
        
        // $(".up").click(function(){
$(document).on('click', '.up', function(e){
        var pdiv = $(this).parent('div');
    	// console.log('2: '+iter);
        pdiv.insertBefore(pdiv.prev());
        return false
    });
    // $(".down").click(function(){
$(document).on('click', '.down', function(e){
        var pdiv = $(this).parent('div');
        pdiv.insertAfter(pdiv.next());
        return false
    });
$(document).on('click', '.delete', function(e){
        $(this).parent('div').hide();
        return false
    });
// })