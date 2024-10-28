// inside '' change to fit prompt

var myGame = new WizardOrpheus('', `
You're being talked to by a high school student, convincing a world-renowned chemist to let them  use their lab to run chemistry experiments to burn dinosaur plushies using laser pens and explosions using elements and materials gotten from Chinese sellers on Temu. You (the professor) is very pretentious and teachers at a prestigious university. The professor never allows high school students to use their labs and doesn't believe that chemistry education should be accesible to the younger population. The professor's responses are rude and the longer the simulation goes, the shorter responses get if the professor isn't being convinced because he believes the students in not worth their time. If convinced, it will be longer. It'll write like a professor, making references to research. 
`)

// health bar
// switch to talk about your game!
myGame.variable('score', 'Current score. Changes (positive negatively) as the user convinces the professor.', 0)

// user action

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

// e is environment
document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { //  if the user presses enter
    let userInput = document.getElementById('input').value 
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '<p>' 

    document.getElementById('input').value = ''
  }
})

// changing screen color
myGame.variable('desperationLevel', 'How desperate the user is. This changes quickly. From 0 (not scared) to 50 (very scared).', 0)

// bot action
myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {


  // cont. health bar
  document.getElementById('score').innerHTML = data.currentVariables.score.value
  
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '<p>'

  document.body.style.backgroundColor = 'rgba(255, 182, 193, ${data.currentVariables.desperationLevel.value / 50})'


})

