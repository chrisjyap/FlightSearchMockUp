Quick Mock Up question  

Consider this JSON object to be data from the backend:  
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

If I had more time, I would have separated the controllers as well as the views.  
I would've handled the states and views with ui-router.  
Also, there would have been more validation on the form and during ng-submit function.  
I'm assuming that backend will have validation and send the appropriate error/status  
code if url was inappropriately called.  
