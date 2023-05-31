# @natu/ui

This package contains all pure **React components**. They are completely independent of **Storyblok or other CMS**. From here they are imported into **Storyblok-ui**. However, this is one-way communication, we don't import anything from **Storyblok-ui** here.

Within the **ui** package, components are imported and used among themselves. In addition, they are created in accordance with [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/).

**The premise of this package is to create universal components that have minimal communication with each other.**
