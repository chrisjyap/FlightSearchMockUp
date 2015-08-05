<h2>Quick Mock Up question</h2>

<h3>Install:</h3>  
    bower install (if bower is installed already)  
  
<h3>Consider this JSON object to be data from the backend:</h3>  
    {data:[{  
            startTime,  
            endTime  
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

<h3>Quick Summary</h3>
I used $filter service because I remember that we discussed that you wanted the data   
filtered before throwing it to view.  
  
If I had more time, I would have separated the controllers as well as the views.  
I would've handled the states and views with ui-router.  
Also, there would have been more validation on the form and during ng-submit function.  
I'm assuming that backend will have validation and send the appropriate error/status  
code if url was inappropriately called.  
