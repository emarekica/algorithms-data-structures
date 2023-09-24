/*  Apply Functional Programming to Convert Strings to URL Slugs

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes.
For example, if you write a Medium post titled Stop Using Reduce, it's likely the URL would have some form of the title string in it (.../stop-using-reduce). You may have already noticed this on the freeCodeCamp site.

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

- The input is a string with spaces and title-cased words
- The output is a string with the spaces between words replaced by a hyphen (-)
- The output should be all lower-cased letters
- The output should not have any spaces

in "https://www.semrush.com/blog/what-is-a-url-slug" URL slug is “/what-is-a-url-slug”

*/

function urlSlug(title) {
  // take a string
  // convert all to lowercase
  // remove spaces, replace with hyphens (-)

  return title
    .toLowerCase()
    .trim()       // removes whitespace from both ends
    .split(/\s+/)  // will return array
    .join("-")    // will return string

}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");