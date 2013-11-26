$(document).ready(function() {
	 

		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		
		change_event = function(_event, delta) {
				console.log("evento" + _event.id);
				
				$.ajax({
					url: "events/"+_event.id+'.json',
					data: {event:{id:_event.id,start:_event.start,end:_event.end }},
					method: 'PUT' ,
					datatype: 'JSON',
					error: function(jqXHR, textStatus, errorThrown) {
								console.log(textStatus);
					},
				    success: function(data) {
				      console.log('event was success updated');
				    },
					
				});
			}
			
			
		$('#calendar').fullCalendar({
		
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
		
			selectable: false,
			selectHelper: false,
			droppable: false,
			editable: false,
			events: "events/",
			eventResize: change_event,
			eventDrop: change_event ,
			
			loading: function(bool) {
				  if (bool) $('#loading').show();
		   		  else $('#loading').hide();
			},
			
			
		   		eventClick: function(event, jsEvent, view){
		        
	            	window.location = ('/events/' + event.id + '/edit')
		          },
		
		         // eventColor: '#ff0000',
		        
				
		});
	
				
});