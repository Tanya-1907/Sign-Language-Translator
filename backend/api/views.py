from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes


# SIMPLE SAFE GLOSS FUNCTION (Demo Stable)
def predict_gloss(text):
    text = text.lower()

    remove_words = ["am", "is", "are", "to", "the", "a"]

    words = text.split()

    gloss_words = [w.upper() for w in words if w not in remove_words]

    return " ".join(gloss_words)


@api_view(['POST'])
@permission_classes([AllowAny])
def translate(request):

    text = request.data.get("text", "")

    gloss = predict_gloss(text)

    return Response({
        "gloss": gloss
    })