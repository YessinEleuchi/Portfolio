// Tableau des questions du quiz avec choix et réponses correctes

const questions = [{
  question: "Quel numéro est indissociable du footballeur Cristiano Ronaldo ?",
  choices: ["10", "8", "7", "2"],
  correctAnswer: "7"
},
{
  question: "Quel milieu de terrain emblématique de Liverpool n’a jamais réussi à remporter le titre de champion d’Angleterre ?",
  choices: ["Steven Gerrard", "Paul Scholes", "David Beckham", "Frank Lampard"],
  correctAnswer: "Steven Gerrard"
},
{
  question: "Dans quel pays se déroule la toute première Coupe du Monde de football en 1930 ?",
  choices: ["Uruguay", "Pays-Bas", "Italy", "France"],
  correctAnswer: "Uruguay"
},
{
  question: "A quelle année 'CSS'  reporte la premiére championnat ?",
  choices: ["1969", "1975", "1995", "2013"],
  correctAnswer: "1969"
},
{
  question: "A quelle année la foundation du Real Madrid ?",
  choices: ["1920", "1919", "1902", "1899"],
  correctAnswer: "1902"
}
];
// Fonction pour mélanger le tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// Mélanger le tableau des questions
shuffleArray(questions);
// Initialiser les variables pour suivre la question actuelle et le score
let currentQuestion = 0;
let score = 0;

// Fonction pour afficher la question actuelle

function displayQuestion() {
  const question = questions[currentQuestion];
  document.querySelector(".question").textContent = question.question;
  const choicesList = document.querySelector(".choices");
  choicesList.innerHTML = ""; // Effacer les choix précédents

  // Créer des éléments de liste pour les choix et ajouter des écouteurs d'événements

  question.choices.forEach(choice => {
    const choiceElement = document.createElement("li");
    choiceElement.textContent = choice;
    choiceElement.addEventListener("click", handleAnswerClick);
    choicesList.appendChild(choiceElement);
  });
  updateProgressBar();
}
// Fonction pour gérer le clic de l'utilisateur sur une réponse

function handleAnswerClick() {
  const chosenAnswer = this.textContent;
  const correctAnswer = questions[currentQuestion].correctAnswer;
  // Vérifier si la réponse choisie est correcte et mettre à jour le score et le message de résultat

  if (chosenAnswer === correctAnswer) {
    score++;
    document.querySelector(".result").textContent = "Correct! +1 Point!";
  } else {
    document.querySelector(".result").textContent = "Incorrect. The answer is " + correctAnswer + ".";
  }
  currentQuestion++;
  // Afficher la question suivante ou afficher le score final

  if (currentQuestion < questions.length) {
    setTimeout(displayQuestion, 1000); // Délai avant la question suivante
  } else {
    showFinalScore();
  }
  updateScore();
}
// Fonction pour afficher le score final

function showFinalScore() {
  const finalScoreMessage = "You answered " + score + " out of 5 questions correctly! Level Up!";
  document.querySelector(".result").textContent = finalScoreMessage;
  document.querySelector(".quiz-box").classList.add("hidden");
}
// Fonction pour mettre à jour la barre de progression en fonction de la question actuelle

function updateProgressBar() {
  const progressBar = document.querySelector(".progress");
  progressBar.style.width = currentQuestion * 20 + "%";
  document.querySelector(".current-level").textContent = "Question " + (currentQuestion + 1) + "/5";
}
// Fonction pour mettre à jour le score affiché

function updateScore() {
  document.querySelector(".score span").textContent = score;
}
// Affichage initial de la première question

displayQuestion();