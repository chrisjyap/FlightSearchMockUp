<h2>Quick Mock Up question</h2>

<h3>Install:</h3>  
    bower install (if bower is installed already)  

<h3>Quick Summary</h3>
<h4>View</h4>
The view is under one controller, but split into two partials. The search form partial has Angular
form validation and changes border of the field to red if input is invalid. Novalidate is called
so that we let Angular handle the validation. The results partial is there we would use a graphs
library, such as D3, to render the data.

<h4>Controller</h4>
The controller only has the function once the form has been submitted because we want the controller
to have little to no business logic. The factory service is injected and is called to make a request
to backend. $filter was used to have the data sorted in the controller rather than sort on the view.

<h4>Services</h4>
The factory service has the request call and will return data or redirect user based on what was
return from backend.

<h4>Model</h4>
    Consider this to be the JSON object result from the backend:
    {data:[{  
            startDate,  
            endDate,  
        	timeStart,  
            timeEnd,  
            flight#,  
            price  
        },  
        {...},  
        ...  
    ],  
    ...  
    }  

<h4>Unit Testing</h4>
I would use Jasmine for unit testing. We would use $httpBackend to mock responses from backend when
testing the factory service. We would also test our filter with various inputs.


If I had more time, I would have separated the controllers as well as the views.  
I would've handled the states and views with ui-router.  
Also, there would have been more validation on the form and during ng-submit function.  
I'm assuming that backend will have validation and send the appropriate error/status  
code if url was inappropriately called.  
