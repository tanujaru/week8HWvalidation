function isValid(cardNumber[1..length])
    sum := 0
    parity := length mod 2
    for i from 1 to length do
        if i mod 2 != parity then
            sum := sum + cardNumber[i]
        elseif cardNumber[i] > 4 then
            sum := sum + 2 * cardNumber[i] - 9
        else
            sum := sum + 2 * cardNumber[i]
        end if
    end for
    return sum mod 10 = 0
end function
