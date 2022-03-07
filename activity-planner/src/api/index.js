
const activities = {
        
    '1546968934': {
        id: "1546968934",
        title: "Learn Vue.js",
        notes: "I started today",
        progress: 0,
        category: "1546969049",
        createdAt: 1546969144391,
        updatedAt: 1546969144391,
    },
    '1546969212': {
        id: "1546969212",
        title: "Read Witcher Books",
        notes: "Good books",
        progress: 67,
        category: "1546969049",
        createdAt: 1546969144391,
        updatedAt: 1546969144391,
    }
      
}

const canContinue = () => {
    const randomNumber = Math.floor(Math.random() * 10)

    if(randomNumber > 5) {
        return true
    }
    return false
}

export const fetchActivities = () => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (canContinue()) {
                resolve(activities)
            }
            else {
                reject('Cannot fetch activities')
            }
        }, 1500)
    })
    

}

const generateUid = () => Math.floor(new Date() * Math.random())


export const createActivityAPI = (activity) => {

    activity.id = generateUid()
    activity.progress = 0
    activity.createdAt = new Date()
    activity.updatedAt = new Date()

    return new Promise ((resolve, reject) => {
        resolve(activity)
    })


}


export const fetchCategories = () => {
    return {
        
        '1546969049': { text: "books", id: '1546969049' },
        '1546969225': { text: "movies", id: '1546969225' },
    }
}

export const fetchUser = () => {
    return {
        
        name: "Ardit Hyseni",
        id: "ah49393",
          
    }
}
