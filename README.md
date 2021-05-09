# Parkinsons Disease Test

## Inspiration

Parkinson's disease is a brain disorder that leads to shaking, stiffness, and difficulty with walking, balance, and coordination. Parkinson's symptoms usually begin gradually and get worse over time. As the disease progresses, people may have difficulty walking and talking. And we are in the COVID-19 time when people can't go to the hospitals because it is almost full and they are afraid of getting COVID-19 without mentioning how much they can be afraid if they doubt that they have Parkinson's disease

## What it does

Our website will help people overcome Parkinson's fright! They just need to draw a spiral and/or a wave on paper, then take a photo, upload it to our app, and our machine learning model will predict whether they have it or not! They can also directly draw the spiral or wave on the website

## How we built it

Considering the COVID scenario we wanted to make the diagnosis simple, where to detect the presence of Parkinson's disease, the person is supposed to upload two images where he or she had drawn a wave and a spiral based on which the detection occurs. These are some of the example images on which the model is being trained and tested.

## Sample Drawings

## Spiral Drawings - Healthly

![Sample Spiral Drawings for Health Inviduals](https://res.cloudinary.com/devpost/image/fetch/s--25ESGrLy--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://user-images.githubusercontent.com/49975886/116790798-e2832900-aad3-11eb-97eb-1ab8e877a148.png)

## Spiral Drawings - Parkinson Affected

![Sample Spiral Drawings for Parkinson-Affected Inviduals](https://res.cloudinary.com/devpost/image/fetch/s--z4ub3uyP--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://user-images.githubusercontent.com/49975886/116790830-15c5b800-aad4-11eb-83d7-2aa801898847.png)

## Waves Drawings - Healthly

![Sample Waves Drawings for Health Inviduals](https://res.cloudinary.com/devpost/image/fetch/s--25ESGrLy--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://user-images.githubusercontent.com/49975886/116790798-e2832900-aad3-11eb-97eb-1ab8e877a148.png)

## Waves Drawings - Parkinson Affected

![Sample Spiral Drawings for Parkinson-Affected Inviduals](https://res.cloudinary.com/devpost/image/fetch/s--z4ub3uyP--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://user-images.githubusercontent.com/49975886/116790830-15c5b800-aad4-11eb-83d7-2aa801898847.png)

## How we built it

We used DCP for searching hyperparameter space for an optimal set then using TensorFlow python API we trained our model with chosen hyperparameter then we export it to tensorflow.js and deployed it on google cloud using Cloud APIgei and in the frontend, we used rest API to access it. We also deployed our react frontend to Firebase.

## Challenges we ran into

We had less time and working in a remote environment with new teammates was a little bit hard, but finally, we make it.

## Model loss and accuracy curves.

![Model Loss and Accuracy Waves](https://res.cloudinary.com/devpost/image/fetch/s--4OMJ60G---/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/507/711/datas/small.png)

## What we learned

We learned teamwork, working remotely with great individuals we have never met before, starting from the ideation stage where we had to agree and disagree as a team over the idea to work on. And later on, learning a lot of new things about the technologies we used.

## What's next for Parkinson Test

We want to improve our model accuracy and achieve the best result we can. Maybe we will work with other diseases and make it an online diagnosis for multiple diseases.

## Built With

Distributed Computer Platform, Google Cloud Platform, Firebase, Python, Tensowflow, React
