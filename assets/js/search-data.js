// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-my-blog",
          title: "My Blog",
          description: "Blog posts will appear here soon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My publications are also available on Google Scholar",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-my-first-first-author-paper-is-finally-out-2-years-of-work-finally-paid-off-check-it-out-here",
          title: 'My first first author paper is finally out! 2 years’ of work finally...',
          description: "",
          section: "News",},{id: "news-my-second-first-author-paper-has-finally-been-accepted-for-publication-by-mnras-link",
          title: 'My second first-author paper has finally been accepted for publication by MNRAS! link!...',
          description: "",
          section: "News",},{id: "news-the-work-i-did-in-my-master-s-thesis-project-at-cecam-epfl-has-been-uploaded-to-arxiv-with-me-as-the-3rd-author-check-it-out-here",
          title: 'The work I did in my Master’s thesis project at CECAM, EPFL has...',
          description: "",
          section: "News",},{id: "news-graduated-from-iiser-mohali-who-would-have-thought-it",
          title: 'Graduated from IISER Mohali! Who would have thought it??',
          description: "",
          section: "News",},{id: "news-i-am-joining-fu-berlin-for-a-phd-sparkles",
          title: 'I am joining FU Berlin for a PhD! :sparkles:',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/jayashreenarayan.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%79%61%73%68%72%65%65%6E%61%72%61%79%61%6E%67%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JayashreeNarayan", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jayashreenarayan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lEzWefoAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/JayashreNarayan", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
