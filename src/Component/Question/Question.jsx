import React from 'react';

const Question = () => {
    return (
        <div className='border-2 p-7 bg-slate-500 text-black '>
            <div className='bg-slate-50 p-7 rounded-lg border-2'>
            <br />
            <h1 className='text-xl'> Question 1:what is the difference between state and props</h1>
            <p>Ans: State is an element used to manage data, props are used to send data to a separate element from the parent element.</p>
            
            <br />
            </div>
            <div className='bg-slate-50 rounded-lg p-7 border-2 mt-5'>
            <br />
            <h1 className='text-xl'>Question 2:useState is how it works ?</h1>
            <p>Ans: Represent the use state hook from the 'react' library
                Change a state variable using the useState hook
                Choice!
                The useState hook takes care to update ComputerCenter whenever the state changes.
                Change the required state variables and
                That's it! The useState hook takes care of updating the component whenever the state changes.</p>

            
            <br />
            </div >

            <div className='bg-slate-50 rounded-lg p-7 border-2 mt-5' >
            <br />
            <h1 className='text-xl'>Question 3:What else can useEffect do other than load data?</h1>
            <p>Ans: 1:Running once on mount: fetch API data. <br />
                2:Running on state change: validating input field ,live filtering, trigger animation on new array value. <br />
                3:Running on props change: update paragraph list on fetched API data update.</p>
            <br />
           
            </div>
            <div className='bg-slate-50 rounded-lg p-7 border-2 mt-5' >
            
            <h1 className='text-xl'>Question 4:What is React, how does React work?</h1>
            <p>Ans:React is an open source JavaScript library for building user interfaces.
                Overall, React is a powerful and popular library for building UIs in JavaScript, and it has a large community of users and easy-to-use tools to improve it and create new tools and libraries to improve its functionality.</p>
            </div>
        </div>
    );
};

export default Question;