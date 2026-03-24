+++
title = "Make your Reads: A CLI for making your Project Documentation"
date = "2026-03-09"

draft = true
template = "blog_post.html"

[taxonomies]
tags = ["projects", "cli", "project-documentation"]
+++

# Make your Reads: A CLI for making your Project Documentation

Have you ever encounter one of those famous/professional Open Source projects and seen a dozen of `.txt` or `.md` files named like `CODE_OF_CONDUCT`, `CONTRIBUTING`, `CHANGELOG`, etc? Have you ever stopped to read them or think about what each file means? If you answered yes or I simply got your attention, then rejoice! In this article I will explain what each file means and showcase a project to help you creating these files.

## A quick glossary

They can be called _"Repository Metadata"_, "Project Documentation", Github calls some of them _"Community Health Files"_[^1]. They're a collection of different textual files, each one may have different propouses (with overlappig regions). Let's talk about those you may find in the wild:

1. `README.md`: you probably have seen this one. It's the entrypoint of your project, show what it is, what it does, how to do things. For me, the other files are just sections of the README that grew too large.
1. `CONTRIBUTING.md`: how someone can contribute to your project, how to notify about a problem, suggest ideas or make a pull request.
1. `CODE_OF_CONDUCT.md`: how someone should behave when interacting with the community surrounding this project. How to report inacceptable behaivor. This goes hand-in-hand with your ` CONTRIBUTING.md`
1. `SECURITY.md`: this one is for projects where reporting a problem may put the software in risk or expose a vulnerability for cyberattacks. So you have a dedicated file to instruct people in how to report this type of issues.
1. `CHANGELOG.md`: I like this one, it's a file mean to keep track of the changes in your project, as you deploy new versions.
1. `LICENSE`: its a file that carries some legal (kinda) statements, you tell what people can do with your project, can they profit over it? Do they need to follow some rules? Your license defines all that.
1. Others: there can be many more like `USAGE.md`, `FUNDING.md` and `ROADMAP.md`. You decide how your project is structured.

Presentations made, let's see a tool to ease the process of managing this files.

## Make your Reads

It's a CLI tool built with Rust that comes with a preset of **curated templates of project metadata** for you to use!

This project is actually a revival of an older one, made to generate _README_ files a long time ago. Instead of facing my problems directely I decided to rebuild the project from scratch. And I have not regret it yet! This version is more mature and refined than the previous. You can find the source code at [github](https://github.com/caio-bernardo/make-your-reads) and it's also  available at [crates.io](https://crates.io/crates/make-your-reads).

### Usage

Now that I have talked about my motivations, let's see how to use the tool.

```sh
$ mkyr help
Easily build common file of your repository, e.g. README, LICENSE, CODE_OF_CONDUCT, CONTRIBUTING and more.

Usage: mkyr [OPTIONS] [COMMAND]

Commands:
  readme     Creates a new README file
  license    Creates a new License file
  coc        Creates a new Code of Conduct file
  contrib    Creates a new Contributing file
  changelog  Creates a new Changelog file
  help       Print this message or the help of the given subcommand(s)

Options:
  -f, --force        overrides file with same output name
  -p, --path <PATH>  output file path
  -h, --help         Print help
  -V, --version      Print version
```

Firstly, the binary is called `mkyr` (because _myr_ was already taken :cry:). For each file type there is a equivalent command with a similar name. Each subcommand may work differently, some may ask the project's name, other provide some optional parameters to insert more information into the file. However, there're two fixed flags: `--force`, to override files, and `--path` to change the default output path.

See the example of generating a README, the command line appears as:
```sh
$ mkyr readme new_project
New README created. Remember to change the file for your personal needs.
```

The generated files looks like:

```md
<!-- This file conforms to the Standard Readme Style -->

# new_project

<!-- INSERT BANNER HERE -->

<!-- INSERT BADGES HERE -->
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

<!-- INSERT SHORT DESCRIPTION HERE -->

<!-- LONG DESCRIPTION HERE -->

<!-- ## Table of Contents -->

<!-- ## Security -->
<!-- ## Background -->

## Install

<!-- ### Dependencies -->

## Usage

<!-- ### CLI/Others -->

<!-- ## EXtra Sections -->

<!-- ## API -->

<!-- ## Maintainers -->

<!-- ## Acknowledgements -->

## Contributing

Feel free to [Open a New Issue](/issues/new) or [Submit a Pull Request](/compare).
See our [CONTRIBUTING](CONTRIBUTING.md) file for more information in how to contribute in more specific ways.
Don't forget to check our [Code of Conduct](CODE_OF_CONDUCT.md) for the repository guidelines.

<!-- ### Contributors -->

## License

This project is under the ___ license. For more info see [LICENSE](LICENSE).

This file was made with [Make Your Reads](https://github.com/caio-bernardo/make-your-reads).
```

Each space meant for you to complete has been marked with a comment, including suggestions and tips of what to do.

## Sources for the Templates

Almost all templates were gather from different places. I tried to get the more populars or the ones I liked the most, here goes a list of sources:

- READMEs from [README Standard](https://github.com/RichardLitt/standard-readme)
- Changelog from [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- Contribution and Code of Conduct from [Contributor Covenant](https://www.contributor-covenant.org/)
- Licenses from there sources, but the options came from [Choose a License](https://choosealicense.com/).

## Similar tools

**Other tools**

There are many websites or CLIs specialized in generating `README` files, but I have never seen one for the others **and** bundled as a **single tool**. If you know one, please tell through the comments or send a message!

**Github File Generators**

Github is actually capable of generating most of this files using templates, you just need to put the desired name and choose your options. Actually, I have taken the `CODE_OF_CONDUCT` options from them. I'm not trying to compete with them, but if you don't use Github or prefere a **local** option, _make your reads_ is probably more attractive to you.

**Language Models**

_Yeah_, my tool cannot compete with a *LLM*, I admit that. However, question yourself, is it worthy your tokens to ask an AI to generate this files, while a cheaper tool exists? You can even generate the files using *Make your Reads* and then ask the model to complete it.

## Conclusion

Organizing and developing a good documentation is essential for Open Source Projects, they can show the maturity of a project and help the developers to situate in your environment, so even if you don't use this tool, please, <mark>make your reads</mark>. 

Moreover, if you liked this project, give it a try or just a [star](https://github.com/caio-bernardo/make-your-reads) :star:. See you next time.

[^1]: [Community Health Files - Github Docs](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)
