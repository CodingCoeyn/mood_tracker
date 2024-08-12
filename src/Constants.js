const production = {
    url:'https://moodtracker2024-c6a6f2fac603.herokuapp.com/'
};

const development = {
    url: 'http://localhost:8000'
};

export const config = process.env.NODE_ENV === 'development' ? development : production