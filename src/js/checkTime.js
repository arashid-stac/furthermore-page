import React, { Component } from 'react';
import '../style/App.css';

class App22 extends Component {
    render() {
        var hour = new Date().getHours();

        if (hour >= 8 && hour <= 10) {
            //At GYM
            return (
                <div className="action">
                    <p className="title-style">At gym</p>
                    <p className="action-content">Right now I am most likely preparing myself for the day by physically engaging my body
                    at the gym. Check back in a few hours if you're interested in finding out what I'm most likely
                    going to doing later.</p>
                </div>
            );
        } else if (hour >= 11 && hour <= 17) {
            //LEARNING
            return (
                <div className="action">
                    <p className="title-style">Learning</p>
                    <p className="action-content">Right now I am most likely keeping myself occupied by either honing my coding skills
                    or looking for new technologies to learn. Check back in a few hours if you're interested in finding out what I'm most likely
                    going to doing later.</p>
                </div>

            );
        } else if (hour >= 18 && hour <= 21) {
            //HOBBIES
            return (
                <div className="action">
                    <p className="title-style">Hobbies/Relaxation</p>
                    <p>Right now I am most likely putting all my business aside to relax after a hard day's work.
                    Check back in a few hours if you're interested in finding out what I'm most likely
                    going to doing later.</p>
                </div>
            );
        } else {
            //SLEEPING
            return (
                <div className="action">
                    <p className="title-style">Sleeping</p>
                    <p>Right now I am most likely either sleeping or preparing to sleep.
                    Check back in a few hours if you're interested in finding out what I'm most likely
                    going to doing later.</p>
                </div>
            )
        }
    }
}

export default App22;