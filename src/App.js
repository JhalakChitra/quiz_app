import { useEffect, useMemo, useState } from 'react';
import './app.css';
import Question from './questionContainer';
import Timer from './timer';
import Start from './start';



function App() {
   
  const [username,setUsername] =useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop,setStop] = useState(false);
  const [earned,setEarned] = useState("$ 0");


  


  const data = [
    {
      id:1,
      question: "‘World Cancer Day’ is observed on",
      answers:[
         {
          text:"19th February",
          correct:false,
         },
         {
          text:"17th February",
          correct:false,
         },
         {
          text:"4th February",
          correct:true,
         },
         {
          text:"12th February",
          correct:false,
         }
      ]},

      {
        id:2,
        question: "Who invented Mobile phone?",
        answers:[
           {
            text:"Graham Bell",
            correct:false,
           },
           {
            text:"Martin Cooper",
            correct:true,
           },
           {
            text:"Edison",
            correct:false,
           },
           {
            text:"Larry Page",
            correct:false,
           }
        ]},

        {
          id:3,
          question: "Who among the following is the co-founder of Google?",
          answers:[
             {
              text:" Larry Page",
              correct:true,
             },
             {
              text:"Time Berners-Lee",
              correct:false,
             },
             {
              text:"Philippe Kahn",
              correct:false,
             },
             {
              text:"Richard Davis",
              correct:false,
             }
          ]},

          {
            id:4,
            question: "Who defined Democracy as the Government of the people, by the people and for the people?",
            answers:[
               {
                text:" George Washington",
                correct:false,
               },
               {
                text:"John Stuart mill",
                correct:false,
               },
               {
                text:"Abraham Lincoln",
                correct:true,
               },
               {
                text:"Winston Churchill",
                correct:false,
               }
            ]},

         {
      id:5,
      question: "Which is the longest River in the world?",
      answers:[
         {
          text:"Nile",
          correct:true,
         },
         {
          text:"Amazon",
          correct:false,
         },
         {
          text:"Thames",
          correct:false,
         },
         {
          text:"Ganges",
          correct:false,
         }
      ]},


      {
        id:6,
        question: "Where is the headquarters of FIFA situated?",
        answers:[
           {
            text:"Zurich",
            correct:true,
           },
           {
            text:"Sao Paulo",
            correct:false,
           },
           {
            text:"London",
            correct:false,
           },
           {
            text:"Dubai",
            correct:false,
           }
        ]},



        {
          id:7,
          question: "International Human Rights Day is observed on",
          answers:[
             {
              text:"24th Oct",
              correct:false,
             },
             {
              text:"10th Dec",
              correct:true,
             },
             {
              text:"25th Nov",
              correct:false,
             },
             {
              text:"None of these",
              correct:false,
             }
          ]},


          {
            id:8,
            question: "Our country is spiritual country, theirs..... religious",
            answers:[
               {
                text:"is",
                correct:true,
               },
               {
                text:"are",
                correct:false,
               },
               {
                text:"also",
                correct:false,
               },
               {
                text:"None of these",
                correct:false,
               }
            ]},



            {
              id:9,
              question: "What is 6% Equals to",
              answers:[
                 {
                  text:"0.0006",
                  correct:false,
                 },
                 {
                  text:"0.006",
                  correct:false,
                 },
                 {
                  text:"06",
                  correct:false,
                 },
                 {
                  text:"0.06",
                  correct:true,
                 }
              ]},


              {
                id:10,
                question: "An integer that is divisible by 2 is called:",
                answers:[
                   {
                    text:"odd",
                    correct:false,
                   },
                   {
                    text:"even",
                    correct:true,
                   },
                   {
                    text:"whole",
                    correct:false,
                   },
                   {
                    text:"natural",
                    correct:false,
                   }
                ]},
  

                {
                  id:11,
                  question: "Find the odd one:",
                  answers:[
                     {
                      text:"garment",
                      correct:false,
                     },
                     {
                      text:"cotton",
                      correct:false,
                     },
                     {
                      text:"shirt",
                      correct:false,
                     },
                     {
                      text:"sugar",
                      correct:true,
                     }
                  ]},
    

                  {
                    id:12,
                    question: "Find the odd one:",
                    answers:[
                       {
                        text:"Ball",
                        correct:true,
                       },
                       {
                        text:"catch",
                        correct:false,
                       },
                       {
                        text:"hold",
                        correct:false,
                       },
                       {
                        text:"take",
                        correct:false,
                       }
                    ]},
      

                    {
                      id:13,
                      question: "which planet is known as Watery planet",
                      answers:[
                         {
                          text:"mercury",
                          correct:false,
                         },
                         {
                          text:"earth",
                          correct:true,
                         },
                         {
                          text:"mars",
                          correct:false,
                         },
                         {
                          text:"jupiter",
                          correct:false,
                         }
                      ]},
        

                      {
                        id:14,
                        question: "which of the following is indicated by the color of a star",
                        answers:[
                           {
                            text:"weigth",
                            correct:false,
                           },
                           {
                            text:"distance",
                            correct:false,
                           }, 
                           {
                            text:"temprature",
                            correct:true,
                           },
                           {
                            text:"size",
                            correct:false,
                           }
                        ]},
          

                        {
                          id:15,
                          question: "How long is an IPV6 Address",
                          answers:[
                             {
                              text:"32 bits",
                              correct:false,
                             },
                             {
                              text:"128 bits",
                              correct:true,
                             }, 
                             {
                              text:"128 byts",
                              correct:true,
                             },
                             {
                              text:"64 bits",
                              correct:false,
                             }
                          ]},
            
  
  
  














  ];

    const moneyPyramid = useMemo (()=>
      [
      {
        id: 1,
        amount: '$ 100'
      },
      {
        id: 2,
        amount: '$ 200'
      },
      {
        id: 3,
        amount: '$ 300'
      },
      {
        id: 4,
        amount: '$ 500'
      },
      {
        id: 5,
        amount: '$ 1000'
      },
      {
        id: 6,
        amount: '$ 2000'
      },
      {
        id: 7,
        amount: '$ 4000'
      },
      {
        id: 8,
        amount: '$ 8000'
      },
      {
        id: 9,
        amount: '$ 16000'
      },
      {
        id: 10,
        amount: '$ 32000'
      },
      {
        id: 11,
        amount: '$ 64000'
      },
      {
        id: 12,
        amount: '$ 125000'
      },
      {
        id: 13,
        amount: '$ 250000'
      },
      {
        id: 14,
        amount: '$ 500000'
      },
      {
        id: 15,
        amount: '$ 1000000'
      },
      
      

    ].reverse(),
  []);


    useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount);
     },[ moneyPyramid, questionNumber]);


     
  return (
    <div className="app">
        {username ? (
          <>
             <div className="main">
          {stop ? <h1 className='endText'>You earned : {earned}</h1> :( 
         <>     <div className='top'>
                 <div className='timer'>
                  <Timer setStop={setStop} questionNumber={questionNumber}/>
                  </div>
            </div>
            <div className='bottom'>
              <Question data={data} 
              setStop={setStop} 
              questionNumber = {questionNumber}
              setQuestionNumber={setQuestionNumber}/>
              </div>  </> ) }
        </div>

        <div className="pyramid">
             <ul className='moneyList'>
              { moneyPyramid.map((m) => (
                   <li className={questionNumber=== m.id ? 'moneyListItem active' : 'moneyListItem'} >
                    <span className='moneyListItemNumber'>{m.id}</span>
                    <span className='moneyListItemAmount'>{m.amount}</span>
                   </li>

              ))}            
             </ul>
        </div>
          </>
        ) : <Start setUsername = {setUsername}/>}
     
    </div>
  );
}

export default App;
