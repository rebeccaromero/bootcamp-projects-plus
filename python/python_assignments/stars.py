"""def draw_stars(arr):
    for index in range(0, len(arr)):
        star_num = arr[index]
        star_display = "*" * star_num
        print star_display

x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)"""

def draw_stars(arr):
    for index in range(0, len(arr)):
        star_or_char = arr[index]
        if type(star_or_char) == int:
            display = "*" * star_or_char
            print display
        elif type(star_or_char) == str:
            char = star_or_char[:1]
            display = char * len(star_or_char)
            print display

x = [4, "Pepper", 1, 3, "meow", 7, "fat"]
draw_stars(x)

