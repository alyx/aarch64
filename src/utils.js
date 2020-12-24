export const getUserInfo = async () => {
    let body = null;
    const res = await fetch('__apiRoute__/user/info', {
        method: 'GET',
    })
    .then(res => body = res.json())
    .catch(err => console.log(err))

    return body;
}

export const getUserProjects = async () => {
    let body = null;
    const res = await fetch('__apiRoute__/projects', {
        method: 'GET',
    })
    .then(res => body = res.json())
    .catch(err => console.log(err))

    return body;
}

export const updateUserInfo = async (user) => {
    console.log('Would have updated user info, but there is no route to do so >:(')
}

export const addNewProject = async (data) => {
    let body = null;
    const res = await fetch('__apiRoute__/projects', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => body = res.json())
    .catch(err => console.log(err))

    return body;
}

export const requestNewResources = async (project_id, data) => {
    let body = null;
    const res = await fetch('__apiRoute__/projects/' + project_id + '/request', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => body = res.json())
    .catch(err => console.log(err))

    return body;
}

export const login = async (data) => {
    let body = null;
    const res = await fetch('__apiRoute__/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => body = res.json())
    .catch(err => console.log(err))
    
    // let body = res.json();
    return body;
}

export const getUserInfoAndProjects = async () => {
    const user = await getUserInfo();
    const projects = await getUserProjects();
    return {user, projects}
}

export const consoleWelcomeMessage = () => {
    console.log('%c \n\
                           AAA                 RRRRRRRRRRRRRRRRR     MMMMMMMM               MMMMMMMM                             66666666           444444444  \n\
                          A:::A                R::::::::::::::::R    M:::::::M             M:::::::M                            6::::::6           4::::::::4  \n\
                         A:::::A               R::::::RRRRRR:::::R   M::::::::M           M::::::::M                           6::::::6           4:::::::::4  \n\
                        A:::::::A              R::::::R     R:::::R  M:::::::::M         M:::::::::M                          6::::::6           4::::44::::4  \n\
                       A:::::::::A             R::::::R     R:::::R  M::::::::::M       M::::::::::M                         6::::::6           4::::4 4::::4  \n\
                      A:::::A:::::A            R::::::R     R:::::R  M:::::::::::M     M:::::::::::M                        6::::::6           4::::4  4::::4  \n\
                     A:::::A A:::::A           R::::::RRRRRR:::::R   M:::::::M::::M   M::::M:::::::M                       6::::::6           4::::4   4::::4  \n\
                    A:::::A   A:::::A          R:::::::::::::::RR    M::::::M M::::M M::::M M::::::M   ---------------    6::::::::66666     4::::444444::::444\n\
                   A:::::A     A:::::A         R::::::RRRRRR:::::R   M::::::M  M::::M::::M  M::::::M   -:::::::::::::-   6::::::::::::::66   4::::::::::::::::4\n\
                  A:::::AAAAAAAAA:::::A        R::::::R     R:::::R  M::::::M   M:::::::M   M::::::M   ---------------   6::::::66666:::::6  4444444444:::::444\n\
                 A:::::::::::::::::::::A       R::::::R     R:::::R  M::::::M    M:::::M    M::::::M                     6:::::6     6:::::6           4::::4  \n\
                A:::::AAAAAAAAAAAAA:::::A      R::::::R     R:::::R  M::::::M     MMMMM     M::::::M                     6:::::6     6:::::6           4::::4  \n\
               A:::::A             A:::::A     R::::::R     R:::::R  M::::::M               M::::::M                     6::::::66666::::::6           4::::4  \n\
              A:::::A               A:::::A    R::::::R     R:::::R  M::::::M               M::::::M                      66:::::::::::::66            4::::4  \n\
             A:::::A                 A:::::A   R::::::R     R:::::R  M::::::M               M::::::M                        66:::::::::66              4::::4  \n\
            AAAAAAA                   AAAAAAA  RRRRRRRR     RRRRRRR  MMMMMMMM               MMMMMMMM                          666666666                444444  \n\ ', 'font-size: .4rem; display: flex; overflow: hidden;')
}