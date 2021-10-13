// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.



const minute = 60000;

const TITLE_OPTIONS = [
    'When was the last time you Commited?',
    'EDDIE! When have you Commited to me LATELY?',
    'Saving is NOT enough, you gotta COMMIT!',
    `It'd be an awful sahme if your computer died right now...`,
    'BATTERY IS LOW',
    'מי שלא מקמט מתחרט!',
    'No Commit - No Coockies',
    'What am I forgeting?',
    `You Have To Commit, Child'a!`,
    'Protect Your Work!',
    'Commit now to not-kick yourself later!',
    'it takes 2 seconds and can save a whole days` work',
    'GO GIT IT!',
    'git down, git down, and move it all around',
    'Maybe even a push once in a while?',
    'if you push it`s like saving REALLY hard',
    'Always Commit before taking a break',
    'Commit now to get FREE peace of mind!',
    'Go on, you know you should',
    'about to test something and everything still works?',
    'Are you ready to make this Commit?'
]
// const BODY_OPTIONS = [
//     'Commit now to not-kick yourself later!',
//     'it takes 2 seconds and can save a whole days` work',
//     'GO GIT IT!',
//     'git down, git down, and move it all around',
//     'Maybe even a push once in a while?',
//     'if you push it`s like saving REALLY hard',
//     'Always Commit before taking a break',
//     'Commit now to get FREE peace of mind!',
//     'Go on, you know you should',
//     'about to test something and everything still works?'
// ]

function randomNumber(arr) {
    const number = Math.floor(Math.random() * arr.length);
    console.log(number)
    return number;
}

function notify() {
    new Notification(TITLE_OPTIONS[randomNumber(TITLE_OPTIONS)], { body: 'COMMIT!' })
        .onclick = () => { } // pop the window
}

function timedNotification() {
    setInterval(() => {
        console.log("timedNotification")
        notify()
    }, 90 * minute)
}

timedNotification();
