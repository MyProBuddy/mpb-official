try:from gtts import gTTS
except:os.system("pip3 install gtts")
import os


def read_text_file(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


def text_to_audio(text, output_file="output.mp3", lang="en"):
    tts = gTTS(text=text, lang=lang, slow=False)
    tts.save(output_file)
    os.system("start " + output_file)

if __name__ == "__main__":
    file_content = read_text_file("script.txt")

    if file_content:
        text_to_audio(file_content)
    else:
        text_to_audio("File not found.")


