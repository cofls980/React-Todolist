module.exports = {
    // 모듈 설정
    entry: "./src/index.tsx",
    module: {
    // 모듈 규칙
    rules: [
        // TypeScript 로더 설정
        {
            test: /\.tsx?$/i,
            exclude: /node_modules/,
            use: ['ts-loader']
        }
    ]
    },

    resolve: {
    // 생략 가능한 확장자로`.ts`, `.tsx` 추가
    extensions: [".tsx", ".ts", "..."]
    }
}