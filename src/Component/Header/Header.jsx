import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="flex p-4 justify-between bg-cyan-300 text-black">
                <button className="font-extrabold  text-sm md:text-3xl">
                    Programming Awareness
                </button>
                <div className="flex font-semibold text-sm md:text-lg gap-4">
                    <a href="/tech">Language</a>
                    <a href="/knowledge">About</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;