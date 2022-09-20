//Esta es la vista

/**
 * This function returns an string containing HTML code which the tweet data in paragraphs.
 * <p>handler</p><p>body</p><p>date</p>
 * @param {Object} tweet 
 * @returns 
 */
export const buildTweetView= (tweet) => {
  const formattedDate=new Date(tweet.date);

  const tweetView=`
    <p>${tweet.handler}</p>
    <p>${tweet.body}</p>
    <p>${formattedDate.toISOString()}</p>
  `;

  return tweetView;
};

