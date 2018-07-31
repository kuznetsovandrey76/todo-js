// $(document).ready(function(){
	var storage = [];
	// Время, которое будет затрачено
	var result = 0;
	var free_time = Number($('.work_time').val())*60;


	$(document).on('click', '.task_add', function(){
		add_task('Good');
	});



	function add_task(new_block_text) {
		var name = $('.task_nameQ').val();
		var text = $('.task_textQ').val();
		var time = $('.task_timeQ').val();
		
		if (time === "" && new_block_text === "Good") {
			alert('а время!')
			return false
		}
		// alert(text);

		var task = [];
		task.push(name, text, time);
		storage.push(task); 

		if (new_block_text === 'Good') {
			$('.article').append('<div class="one_task">\
									<span class="up">↑</span><span class="down">↓</span>\
									<input type="text" placeholder="task:" class="task_name" value="'+name+'">\
									<input type="text" placeholder="description:" class="task_description" value="'+text+'">\
									<input type="text" class="task_time" value="'+time+'" disabled>\
									<span class="copy">copy</span>\
									<span class="delete">delete</span>\
								  </div>');
		} else {
			$('.article').append('<div class="one_task">'+new_block_text+'</div>');
		}
		$('.task_nameQ').val('');
		$('.task_textQ').val('');
		$('.task_timeQ').val('');

		result += Number(time);
		$('.total').text(free_time - result);
	}





	$(document).on('click touchstart', '.up', function(e){
	        var pdiv = $(this).parent('div');
	        pdiv.insertBefore(pdiv.prev());
	        return false;
	    });

	$(document).on('click', '.down', function(e){
	        var pdiv = $(this).parent('div');
	        pdiv.insertAfter(pdiv.next());
	        return false;
	    });
	$(document).on('click', '.delete', function(e){
			result -= Number(this.parentNode.children[4].value);
			$('.total').text(free_time - result);
	        $(this).parent('div').hide();
	        return false;
	    });
	// Копирование исправленных элементов не работает
	$(document).on('click', '.copy', function(e){
			result += Number(this.parentNode.children[4].value);
			$('.total').text(free_time - result);
			add_task(this.parentNode.innerHTML);
			console.log(this.parentNode.innerHTML);
	        return false;
	    });

// })


$(document).on('keyup', '.task_time', function(e){
    var $field = $(this);

    // this is the value before the keypress
    var beforeVal = $field.val();

    setTimeout(function() {
        // this is the value after the keypress
        var afterVal = $field.val();

        console.log(afterVal);
    }, 0);
});

// });
