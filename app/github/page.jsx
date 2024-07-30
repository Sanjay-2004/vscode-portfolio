"use client"
import { useEffect, useState } from "react"
import axios from 'axios'
import githubProj from '@/json/github.json'
import GitHubCalendar from "react-github-calendar"
import Githubcard from "@/components/Githubcard"

const Github = () => {
    const theme = {
        light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
        dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    const [data, setData] = useState({
        login: '',
        avatar_url: '',
        html_url: '',
        public_repos: 0,
        followers: 0,
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/Sanjay-2004')
                const { login, avatar_url, html_url, public_repos, followers } = response.data
                console.log(login, avatar_url, html_url, public_repos)
                setData({ login, avatar_url, html_url, public_repos, followers })
                const repodata = await axios.get('https://api.github.com/users/Sanjay-2004/repos')
                console.log(repodata)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="flex flex-col items-center gap-4 py-5 font-jetbrains max-w-7xl">
            <div className="w-[70%] bg-tabs-bg p-6 my-5 flex items-center justify-center gap-4">
                <div className="flex items-center justify-center">
                    <img src={data.avatar_url} alt={data.login} className="w-24 h-24 rounded-full border-2 border-gray-300" />
                </div>
                <div className="border-l border-gray-400 h-24"></div>
                <div className="flex flex-col items-center">
                    <a href={data.html_url} target="_blank" rel="noopener noreferrer"><p className="text-lg font-bold">{data.login}</p></a>
                    <p className="text-sm">Repos: {data.public_repos}</p>
                    <p className="text-sm">Followers: {data.followers}</p>
                </div>
            </div>
            <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
                {githubProj.map((project, index) => (
                    <Githubcard key={index} {...project} />
                ))}
            </div>
            <div className=" mt-6"><GitHubCalendar
                username="Sanjay-2004"
                theme={theme}
                hideColorLegend
                hideMonthLabels
            /></div>
        </div>
    )
}

export default Github
