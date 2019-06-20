const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './src',
  output: {
    library: 'AppShell',
    libraryTarget: 'umd',
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },

}

const compile = async config => {
  const compiler = webpack(config)

  const res = await compiler.run()

  console.log(res)
}

compile(config)
