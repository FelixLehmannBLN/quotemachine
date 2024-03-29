
  $('.button').on('click', function(event) {
    event.preventDefault();
    addQuote();
  });

  var $quotes = [
    
    "“Life is 10% what happens to us and 90% how we react to it.” – Dennis P. Kimbro",
    "“There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures.” – Josiah Gilbert Holland ",
    "“Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.” – William James",
    "“When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.” – Erma Bombeck",
    "“The quickest way to double your money is to fold it over and put it back in your pocket.” – Will Rogers",
    "“Even if you’re on the right track, you’ll get run over if you just sit there.” – Will Rogers",
    "“When I hear somebody sigh, ‘Life is hard,’ I am always tempted to ask, ‘Compared to what?’” – Sydney Harris",
    "“Nurture your mind with great thoughts. To believe in the heroic makes heroes.” – Benjamin Disraeli",
    "“The real opportunity for success lies within the person and not in the job.” – Zig Ziglar",
    "“Look at the sparrows; they do not know what they will do in the next moment. Let us literally live from moment to moment.” – Mahatma Gandhi",
    "“Luck is a dividend of sweat. The more you sweat, the luckier you get.” – Ray Kroc",
    "“When I let go of what I am, I become what I might be.” – Lao Tzu",
    "“You may find the worst enemy or best friend in yourself.” – English Proverb",
    "“Whoever loves much, performs much, and can accomplish much, and what is done in love is done well.” – Vincent Van Gogh",
    "“Courage is the first of human qualities because it is the quality which guarantees all others.” – Winston Churchill",
    "“The great thing in this world is not so much where you stand, as in what direction you are moving.” – Oliver Wendell Holmes",
    "“Live each day as if your life had just begun.” – Johann Wolfgang Von Goethe",
    "“Every truth passes through three stages before it is recognized. In the first, it is ridiculed. In the second, it is opposed. In the third, it is regarded as self evident.” - Arthur Schopenhauer",
    "“Either you run the day, or the day runs you.” – Jim Rohn",
    "“The difference between a successful person and others is not lack of strength not a lack of knowledge but rather a lack of will.” – Vince Lombardi",
    "“If not us, who? If not now, when?” – John F. Kennedy",
    "“Don’t worry about failures, worry about the chances you miss when you don’t even try.” – Jack Canfield",
    "“Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.” – Carl Bard",
    "“Life has two rules: #1 Never quit #2 Always remember rule # 1.” – Unknown",
    "“Some men see things as they are and say why – I dream things that never were and say why not.” – George Bernard Shaw",
    "“The only way of finding the limits of the possible is by going beyond them into the impossible.” – Arthur C. Clarke",
    "“Speak less than you know; have more than you show.” – William Shakespeare",
    "“Do not go where the path may lead, go instead where there is no path and leave a trail.” – Ralph Waldo Emerson",
    "“Many of life’s failures are experienced by people who did not realize how close they were to success when they gave up.” – Thomas Edison",
    "“Education costs money. But then so does ignorance.” – Sir Claus Moser",
    "“The journey of a thousand miles begins with one step.” – Lao Tzu",
    "“Every noble work is at first impossible.” – Thomas Carlyle",
    "“Do not let what you cannot do interfere with what you can do.” – John Wooden",
    "“Defeat is not bitter unless you swallow it.” – Joe Clark",
    "“Nobody ever wrote down a plan to be broke, fat, lazy, or stupid. Those things are what happen when you don’t have a plan.” – Larry Winget",
    "“Rule #1 of life. Do what makes YOU happy.” – Unknown",
    "“The best revenge is massive success.” – Frank Sinatra",
    "“It is not enough to aim, you must hit.” – Italian Proverb",
    "“Challenges are what make life interesting and overcoming them is what makes life meaningful.” – Joshua J. Marine",
    "“Every strike brings me closer to the next home run.” – Babe Ruth",
    "“Challenges are what make life interesting and overcoming them is what makes life meaningful.” – Joshua J. Marine",
    "“An obstacle is often a stepping stone.” – Prescott",
    "“I am not a product of my circumstances. I am a product of my decisions.” – Stephen Covey",
    "“Our lives begin to end the day we become silent about things that matter.” – Martin Luther King Jr.",
    "“Keep away from people who try to belittle your ambitions. Small people always do that, but the really great makes you feel that you, too, can become great.” – Mark Twain",
    "“Eighty percent of success is showing up.” – Woody Allen",
    "“I have never in my life learned anything from any man who agreed with me.” – Dudley Field Malone",
    "“I am thankful for all of those who said NO to me. Its because of them I’m doing it myself.” – Albert Einstein",
    "“We become what we think about.” – Earl Nightingale",
    "“The mind is everything. What you think you become.” – Buddha"

  ];

  function addQuote() {
    var $quote = $quotes[Math.floor((Math.random()*($quotes.length-1)+1))];
    $('blockquote p').remove();
    $('<p>'+$quote+'</p>').appendTo('blockquote')
  };