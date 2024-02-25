function solution(tickets) {
    const n = tickets.length + 1
  const graph = {}
  for(let [start, end] of tickets) {
    if(!graph[start]) {
      graph[start] = []
    }
    if(!graph[end]) {
      graph[end] = []
    }
    graph[start].push(end)
    graph[start].sort()
  }

  const answer = []
  const visited = new Set()
  const dfs = (current, route) => {
    if(route.length === n) {
      answer.push([...route])
      return
    }
    for(let i = 0; i < graph[current].length; i++) {
      const des = graph[current][i]
      const ticket = `${current}#${des}`
      if(!visited.has(ticket) || (i >= 1 && ticket === `${current}#${graph[current][i-1]}`)) {
        visited.add(ticket)
        route.push(des)
        dfs(des, route)
        route.pop()
        visited.delete(ticket)
      }
    }
  }
  dfs("ICN", ["ICN"])

  return answer[0]
}