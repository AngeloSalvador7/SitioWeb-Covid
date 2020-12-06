$(document).ready(function() {

    $('#calendar').fullCalendar({
    //defaultDate: '2020-01-01', // Muestra el calendario a partir de ese día
	  defaultDate: moment().format("YYYY-MM-DD"), //Arranca a partir del día actual
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Vacuna-dia 1',
          url:'coronavirus.html',
          start: '2020-11-27'
        },
		    {
          title: 'Vacuna-dia 2',
          url:'coronavirus.html',
          start: '2020-11-30'
        },
		{
          title: 'Vacuna-dia 3',
		      url:'coronavirus.html',
          start: '2020-12-02',
        },
		{
          title: 'Semana-Vacunacion',
          url:'coronavirus.html',
          start: '2020-12-14',
          end:'2020-12-19',
        },
      ]
    });

  });
