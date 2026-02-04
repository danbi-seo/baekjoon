function solution(genres, plays) {
    const genreMap = new Map();

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        if (!genreMap.has(genre)) {
            genreMap.set(genre, { total: 0, songs: [] });
        }

        genreMap.get(genre).total += play;
        genreMap.get(genre).songs.push({ idx: i, play });
    }
    const sortedGenres = [...genreMap.entries()]
        .sort((a, b) => b[1].total - a[1].total);

    const answer = [];
    
    for (const [genre, data] of sortedGenres) {
        data.songs.sort((a, b) => {
            if (b.play !== a.play) return b.play - a.play;
            return a.idx - b.idx;
        });

        for (let i = 0; i < Math.min(2, data.songs.length); i++) {
            answer.push(data.songs[i].idx);
        }
    }

    return answer;
}
