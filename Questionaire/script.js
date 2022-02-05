var  questions=[
          ['Q1. Which keeper won the golden glove ?','Allison','Cech','Ederson','Kepa','Allison'],
          ['Q2. How many players won the golden boot this season?','Two','Three','One','None','Three'],
          ['Q3. Who was name the pfa player of the year ?','Sterling','Hazard','Van Dijk','Mane','Van Dijk'],
          ['Q4. Who had the most assists ?','Fraser','Eriksen','Hazard','Sterling','Hazard'],
          ['Q5. What postion did chelsea end up on the table ?','Fourth','Fifth','Third','Second','Third'],
          ['Q6. When was mourinho sacked ?','November','October','December','January','December'],
          ['Q7. What was man city total points ?','96','99','97','98','98'],
          ['Q8. Who scored the opening goal of the season ?','Sterling','Mane','Pogba','Willian','Pogba'],
          ['Q9. Which keeper was in goal in the pfa team of the season ?','Allison','Kepa','Ederson','De Gea','Ederson'],
          ['Q10. How many clean sheets did De Gea had ?','7','8','9','6','7'],
          ['Q11. Origi has a dual citizenship of belgium and ?','Kenya','Ghana','Togo','Burkina Faso','Kenya'],
          ['Q12. How many league goals did vardy scored ?','19','18','17','16','18'],
          ['Q13. How many league goals did lukaku scored ?','13','14','12','None of the Above','12'],
          ['Q14. How many gaoals and assists did hazard reached in the league ?','15G 15A','16G 16A','16G 15A','17G 15A','16G 15A'],
          ['Q15. What was watford final standing on the table ?','9th','10th','11th','12th','11th']     
          ];

var num=0;
var correctAnswer=0;
var question=document.getElementById('question');
var option1=document.getElementById('option1');
var option2=document.getElementById('option2');
var option3=document.getElementById('option3');
var option4=document.getElementById('option4');
var submit=document.getElementById('submit');

function insertQuestion(){
	q=questions[num][0];
   	firstOption=questions[num][1];
	secondOption=questions[num][2];
	thirdOption=questions[num][3];
	fourthOption=questions[num][4];

	optionA = '<input type="radio" value="'+firstOption+'" name="options" >'+firstOption;
	optionB = '<input type="radio" value="'+secondOption+'" name="options" >'+secondOption;
	optionC = '<input type="radio" value="'+thirdOption+'" name="options" >'+thirdOption;
	optionD = '<input type="radio" value="'+fourthOption+'" name="options" >'+fourthOption;
	button = '<input type="button" id="a" onclick="verifyAnswer()" value="submit" name="submit" >';

    question.innerHTML=q;
    option1.innerHTML=optionA;
	option2.innerHTML=optionB;
	option3.innerHTML=optionC;
	option4.innerHTML=optionD;
	submit.innerHTML=button;
}

   insertQuestion();
var correctAnswer;
var options=document.getElementsByName('options');

function verifyAnswer(){

	for (var i = 0; i <options.length; i++) {

		if (options[i].checked) {
			opt = options[i].value;
		}

	}
	if (opt == questions[num][5]) {
			correctAnswer=correctAnswer+1;
			console.log('compare');
	}
	
        num++;
        insertQuestion();
       }

var timer=document.getElementById('timer');
var count = 50;

var container=document.getElementById('container');
    

function countDown(){
 	timer.innerHTML=count;
	count--;

	var timeout=setTimeout(countDown,1000);
	if(count ==0) {
		clearTimeout(timeout);
		container.innerHTML='Time Up<br><br>';
		container.innerHTML+='You scored: ' + (correctAnswer/15) * 100 + '%';
	}
	if(num >= questions.length) {
		container.innerHTML='Finished<br><br>';
		container.innerHTML+='You scored: ' + (correctAnswer/15) * 100 + '%';    
	}
}

countDown();

