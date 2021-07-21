import { useState } from "react";

const TextPost = () => {
  const [displayText, setDisplayText] = useState(false);

  const showText = (text) => {
    setDisplayText(text);
  };

  const shortText = `How life has changed, I never thought getting something like my 
  EU Digital COVID Certification would excite me, but it did. Since getting the 2nd jab,
   I haven't felt the best, but thankfully I am starting to feel somewhat normal again. `;

  const completeText = `How life has changed, I never thought getting something like my 
  EU Digital COVID Certification would excite me, but it did. Since getting the 2nd jab,
   I haven't felt the best, but thankfully I am starting to feel somewhat normal again.
    Fingers crossed, we continue to make progress with the vaccine rollout and get our beautiful
     country booming once again.
     
     The light at the end of the tunnel is brighter than the biggest brightest star - Keith McClelland`;

  return (
    <div>
      <p className="text-post">
        {!displayText && shortText}
        {!displayText && (
          <span
            className="mb-0 see-more"
            onClick={() => showText(completeText)}
          >
            ...see more
          </span>
        )}
        {displayText && displayText}
      </p>
    </div>
  );
};
export default TextPost;
