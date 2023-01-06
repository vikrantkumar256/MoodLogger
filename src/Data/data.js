import React from "react";

const moodData = {
    "Happy": {
        "Joy": "Live with joy, be part of a better world",
        "Excitement": "Great ! Let's a draw a picture of what excitment looks like.",
        "Pride": "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner.",
        "Contentment": "The greatest wealth is to live content with little.",
        "Gratitude": "Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul",
        "Amusement": "Keep yourself amused and others confused.",
        "Playfulness": "The very essence of playfulness is an openness to anything that may happen, the feeling that whatever happens, it's okay... you're either free to play, or you're not.",
        "custom": "Be happy. Be bright. Be you."
    },
    "Sad": {
        "Gloomy": "No matter how gloomy the morning,it is a new day where anything is possible.",
        "Hopeless": "Magic is believing in yourself. If you can make that happen, you can make anything happen.",
        "Disappointed": "We must accept finite disappointment, but never lose infinite hope.",
        "Unhappy": "There you go...let it all slide out. Unhappiness can't stick in a person's soul when it's slick with tears.",
        "Lonely ": "Sometimes you have to stand alone just to make sure you still can.",
        "Bored": "Is life not a thousand times too short for us to bore ourselves? Is life not a thousand times too short for us to bore ourselves?",
        "custom": "You're not alone my dear friend. Just get up and look around, there are many reasons to be happy."
    },

    "Fear": {
        "Scared": "It’s OKAY to be scared. Being scared means you’re about to do something really, really brave.",
        "Worried": "Instead of worrying about what you cannot control, shift your energy to what you can create.",
        "Apprehensive": "No Matter how hard it gets, stick your chest out, keep your head up, and handle it.",
        "Anxious": "Anxiety is the dizziness of the freedom.", "Panic ": "Breathe in and out as slowly, deeply and gently as you can. Close your eyes genly and focus on your breathing.",
        "Insecure": "The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.", "Discouraged": "Do not get discouraged nor be in despair, the Divine Being, God is with you, he is your present helper in times of trouble.",
        "custom": "The brave man is not he who does not feel afraid, but he who conquers that fear."
    },
    "Anger": {
        "Irritated": "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
        "Mad": "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
        "Annoyed": "Get some exercise, take a timeout and once you are calm express your concern",
        "Skeptical": "Pinpoint your insecurities, and try to notice the ones that are strongest * Identify your accomplishments",
        "Jealous": "Don't waste time on jealousy. Sometimes you're ahead, sometimes you're behind.",
        "custom": "For every minute you remain angry, you give up sixty seconds of peace of mind."
    },
    "Disgust": {
        "Repulsed": "It's ok to walk out of something if you feel you do not belongs to it.",
        "Aversion": "To set up what you like against what you dislike, this is the disease of the mind.",
        "Distaste": "A distaste for the new is not always fear of the unknown, but sometimes ambition. Some people don't like the new way simply because they never got a chance to master the old way.",
        "Repelled": "We are disgusted by the things that we desire, and we desire what disgusts us.",
        "Sickened ": "Sometimes we're tested not to show our weakness, but to discover our strengths.",
        "custom": "It's ok to walk out of something if you feel you do not belongs to it."
    },
    "Surprise": {
        "Shocked": "Those who are easily shocked should be shocked more often.",
        "Astonished": "Don't let a single day go by without being astonished by something.",
        "Amazed": "Life is a fairy tale. Live it with wonder and amazement.",
        "Stunned": "Great ! Everything has beauty, but not everyone sees it.",
        "Wonderment": "Never stop wandering into wonder.",
        "custom": "Surprise is the greatest gift which life can grant us"
    }
};

const imageData = {
    "Joy": require('../Assets/emotions/Joy.png'),
    "Excitement": require('../Assets/emotions/Excitement.png'),
    "Pride": require('../Assets/emotions/Pride.png'),
    "Contentment": require('../Assets/emotions/Contentment.png'),
    "Gratitude": require('../Assets/emotions/Gratitude.png'),
    "Amusement": require('../Assets/emotions/Amusement.png'),
    "Playfulness": require('../Assets/emotions/Playfulness.png'),
    "Gloomy": require('../Assets/emotions/Gloomy.png'),
    "Hopeless": require('../Assets/emotions/Hopeless.png'),
    "Disappointed": require('../Assets/emotions/Disappointed.png'),
    "Unhappy": require('../Assets/emotions/Unhappy.png'),
    "Lonely ": require('../Assets/emotions/Lonely.png'),
    "Bored": require('../Assets/emotions/Bored.png'),
    "Scared": require('../Assets/emotions/Scared.png'),
    "Worried": require('../Assets/emotions/Worried.png'),
    "Apprehensive": require('../Assets/emotions/Apprehensive.png'),
    "Anxious": require('../Assets/emotions/Anxious.png'),
    "Panic ": require('../Assets/emotions/Panic.png'),
    "Insecure": require('../Assets/emotions/Insecure.png'),
    "Discouraged": require('../Assets/emotions/Discouraged.png'),
    "Frustrated": require('../Assets/emotions/Frustrated.png'),
    "Irritated": require('../Assets/emotions/Irritated.png'),
    "Mad": require('../Assets/emotions/Mad.png'),
    "Annoyed": require('../Assets/emotions/Annoyed.png'),
    "Skeptical": require('../Assets/emotions/Skeptical.png'),
    "Jealous": require('../Assets/emotions/Jealous.png'),
    "Repulsed": require('../Assets/emotions/Repulsed.png'),
    "Aversion": require('../Assets/emotions/Aversion.png'),
    "Distaste": require('../Assets/emotions/Distaste.png'),
    "Repelled": require('../Assets/emotions/Repelled.png'),
    "Sickened ": require('../Assets/emotions/Sickened.png'),
    "Shocked": require('../Assets/emotions/Shocked.png'),
    "Astonished": require('../Assets/emotions/Astonished.png'),
    "Amazed": require('../Assets/emotions/Amazed.png'),
    "Stunned": require('../Assets/emotions/Stunned.png'),
    "Wonderment": require('../Assets/emotions/Wonderment.png')


};

export { imageData, moodData };