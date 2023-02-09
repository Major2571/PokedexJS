function filterGenerations(generations) {

    if (generations === "gen-I") {
        offset = 0;
        limit = 151;
    }
    else if (generations === 'gen-II') {
        offset = 151;
        limit = 100;
    }
    else if (generations === 'gen-III') {
        offset = 251;
        limit = 135;
    }
    else if (generations === 'gen-IV') {
        offset = 386;
        limit = 107;
    }
    else if (generations === 'gen-V') {
        offset = 493;
        limit = 156;
    }
    else if (generations === 'gen-VI') {
        offset = 649;
        limit = 72;
    }
    else if (generations === 'gen-VII') {
        offset = 721;
        limit = 88;
    }
    else if (generations === 'gen-VIII') {
        offset = 809;
        limit = 89;
    }

}
