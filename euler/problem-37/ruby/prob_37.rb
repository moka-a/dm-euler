class Moka

  def is_sosu(a)
  	flag = true
  	(2...a).each do |i|
  		if a % i == 0
  			flag = false
  		end
  	end

    a == 1 ? flag = false : nil
  	flag
  end

  def remove_l(a)
  	a.to_s.slice!(1..a.size).to_i
  end

  def remove_r(a)
  	length = a.to_s.size
  	l = length - 2
  	a.to_s.slice!(0..l).to_i
  end

  def check(a)
  	flag = true
  	temp = a
  	tp = a

  	if !is_sosu(a)
  	  return false
  	end

  	for i in 0..a.size
      tp = remove_l(tp)
  	  if !is_sosu(tp) 
  	  	return false
  	  end
  	end

  	for i in 0..a.size
  	  temp = remove_r(temp)
	  if !is_sosu(temp) 
	    return false
  	  end
  	end

  	return true
  end

  def result
  	a = []
  	i = 10
    while true
      if check(i) 
        a << i
        puts i
      end
      i = i + 1
      if a.size == 11
      	break
      end
  	end
  	puts a.to_s
    a.inject(:+)
  end

end