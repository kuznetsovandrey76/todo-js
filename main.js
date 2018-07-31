// $(document).ready(function(){
	var storage = [];
	var result = 0;
	var free_time = 0;

	$('.task_add').click(function() {

		var name = $('.task_nameQ').val();
		var text = $('.task_textQ').val();
		var time = $('.task_timeQ').val();
		
		if (time == "") {
			alert('а время!')
			return false
		}

		var task = [];
		task.push(name, text, time);
		storage.push(task); 

		$('.article').append('<div class="one_task">\
								<span class="up">↑</span><span class="down">↓</span>\
								<input type="text" placeholder="task:" class="task_name" value="'+name+'">\
								<input type="text" placeholder="description:" class="task_description" value="'+text+'">\
								<input type="text" class="task_time" value="'+time+'" disabled>\
								<span class="delete">delete</span>\
							  </div>');
		$('.task_nameQ').val('');
		$('.task_textQ').val('');
		$('.task_timeQ').val('');

		result+=Number(time);
		$('.total').text(result);
	});



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
			$('.total').text(result);
	        $(this).parent('div').hide();
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
