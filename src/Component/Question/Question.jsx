import React from 'react';

const Question = () => {
    return (
        <div className='border-2 p-3'>
            <h3>Question 1:what is the difference between state and props</h3>
            <p>state is used to manage data within a component, while props are used to pass data from a parent component to a child component.</p>
            <br />
                <br />
            <h3>Question 2:useState is how it works ?</h3>
            <p>Ans:Represent the use state hook from the 'react' library
                Change a state variable using the useState hook
                Choice!
                The useState hook takes care to update ComputerCenter whenever the state changes.
                Change the required state variables and
                That's it! The useState hook takes care of updating the component whenever the state changes.</p>
                
                <br />
                <br />

            <h3>Question 3:What else can useEffect do other than load data?</h3>
            <p>Ans:1:Running once on mount: fetch API data. <br />
                2:Running on state change: validating input field.
                3:Running on state change: live filtering.
                4:Running on state change: trigger animation on new array value.
                5:Running on props change: update paragraph list on fetched API data update.</p>
                <br />
                <br />
            <h3>Question :What is React, how does React work?</h3>
            <p>Ans:React is an open-source JavaScript library for building user interfaces.
                Overall, React is a powerful and popular library for building UIs in JavaScript, and it has a large and active community of developers working to improve it and create new tools and libraries to enhance its functionality.</p>
        </div>
    );
};

export default Question;