# This is a Acronyms Python script.

# Generates a short form of a word from a given sentence
# If User input is machine learning, then output will be ML.

# Function that converts sentence into short form.
def short_form(phrase: str):
    # Splitting user sentence/phrase
    text = phrase.split()

    # Declare variable to store the acronym of a phrase.
    empty_word = ''

    # for loop over the variable ‘empty_word’ which represents the split of user input.
    for i in text:
        empty_word = empty_word + str(i[0]).upper()
    print(empty_word)


# Main
if __name__ == '__main__':
    # Taking user input as a string.
    phrase = str(input())

    # Calling short_form Function
    short_form(phrase)
