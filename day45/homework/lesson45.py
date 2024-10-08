def count_words(text):
    words = text.split()
    return len(words)
user_input = input("Enter the text: ")
print( count_words(user_input))
