const HeaderPost = () => {
    return(
    
            <div className="d-flex justify-content-between pt-2 like-section align-items-center">
            <div className="who-like">
              <span className="links-feed">Ingrid Oncken </span><span className="span-like">commented on this</span>
            </div>
            <div className="dots-feed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match svg-dots"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
              </svg>
            </div>
          </div>
      
    )
}

export default HeaderPost