class Moka

  def sum_of_aliquot(num)
    sum = 0
    (1...num).each do |i|
      if num % i == 0 
        sum = sum + i
      end
    end
    sum
  end

  def find_wooesu(num)
    wooesu = sum_of_aliquot(num)
    sum_of_aliquot(wooesu) == num and wooesu != num ? true : false
  end

  def sum_of_wooesu(max_num)
    sum = 0
    (1..max_num).each do |i|
      if find_wooesu(i)
        sum = sum + i
        puts i
      end
    end
    sum
  end

end