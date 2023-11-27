from random import choice

capital = "Topeka"

bird = "Western Meadownlark"

flower = "Sunflower"

song = "Home on the Range"

def randomfunfact():
    funfacts = [
        "Kansas is considered flat, but it does have a mountain.",
        "Wichita is the largest city in the state, but many would guess that it is Kansas city.",
        "A considerable portion of Kansas City is actually in Missouri."
    ]

    index = choice("012")

    print(funfacts[int(index)])

if __name__ == "__main__":
    randomfunfact()