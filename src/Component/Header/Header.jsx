import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="flex p-4 justify-between bg-white-300">
                <button className="font-extrabold text-sm md:text-3xl">
                    Technology Awareness
                </button>
                <div className="flex font-semibold text-sm md:text-lg gap-4">
                    <a href="/tech">Tech</a>
                    <a href="/knowledge">Knowledge</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;